// Utility để parse markdown text thành formatted content
export function parseMarkdown(text: string): string {
  if (!text) return '';
  
  let formatted = text;
  
  // Step 1: Parse numbered lists TRƯỚC (để tránh conflict với dấu *)
  // Format: 1. item hoặc số bất kỳ
  formatted = formatted.replace(/^(\d+)\.\s+(.+)$/gm, (_match, num, content) => {
    return `<div class="flex gap-2 my-1.5"><span class="font-bold text-primary-600 dark:text-primary-400 min-w-[28px] flex-shrink-0">${num}.</span><span class="flex-1">${content}</span></div>`;
  });
  
  // Step 2: Parse bullet points với * hoặc - ở đầu dòng (kể cả có indent)
  // Bắt: "* item", "  * item", "- item"
  formatted = formatted.replace(/^(\s*)[\*\-]\s+(.+)$/gm, (_match, indent, content) => {
    const indentClass = indent.length > 0 ? 'ml-6' : '';
    return `<div class="flex gap-2 my-1 ${indentClass}"><span class="text-primary-600 dark:text-primary-400 flex-shrink-0">•</span><span class="flex-1">${content}</span></div>`;
  });
  
  // Step 3: Parse bold text: **text** -> <strong>text</strong>
  formatted = formatted.replace(/\*\*([^\*]+?)\*\*/g, '<strong class="font-bold text-primary-700 dark:text-primary-400">$1</strong>');
  
  // Step 4: Parse italic/emphasis: *text* (single asterisk, not at line start)
  // Chỉ apply cho text giữa câu, không phải đầu dòng
  formatted = formatted.replace(/(?<!^)(?<!\*)(\*)(?!\*)([^\*\n]+?)(?<!\*)(\*)(?!\*)/gm, '<em class="italic text-gray-700 dark:text-gray-300">$2</em>');
  
  // Step 5: Parse code inline: `code`
  formatted = formatted.replace(/`([^`]+?)`/g, '<code class="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 text-red-600 dark:text-red-400 rounded text-sm font-mono">$1</code>');
  
  // Step 6: Xóa các dấu * đơn lẻ còn sót lại ở đầu dòng (nếu còn)
  formatted = formatted.replace(/^[\*]\s+/gm, '• ');
  
  // Step 7: Parse line breaks
  formatted = formatted.replace(/\n\n+/g, '<div class="h-3"></div>'); // Double line break = spacing
  formatted = formatted.replace(/\n/g, '<br/>'); // Single line break
  
  return formatted;
}

// Component để render formatted markdown
export function formatMessageContent(text: string): React.ReactNode {
  const formatted = parseMarkdown(text);
  return formatted;
}

