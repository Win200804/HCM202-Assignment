// 30 câu hỏi quiz về Tư tưởng Hồ Chí Minh - Độc lập dân tộc
// Đáp án đã được xáo trộn để không dễ đoán
import type { QuizQuestion } from '../types/quiz.types';

export const quizData: QuizQuestion[] = [
  // PHẦN I: VẤN ĐỀ ĐỘC LẬP DÂN TỘC (15 câu)
  
  // Quyền thiêng liêng của dân tộc (4 câu)
  {
    id: 'q1',
    question: 'Theo Hồ Chí Minh, cái mà Người cần nhất trên đời là gì?',
    options: [
      'Danh vọng và quyền lực',
      'Của cải vật chất',
      'Đồng bào được tự do, Tổ quốc được độc lập',
      'Sự công nhận từ quốc tế'
    ],
    correctAnswer: 2,
    explanation: 'Hồ Chí Minh từng nói: "Cái mà tôi cần nhất trên đời là đồng bào tôi được tự do, Tổ quốc tôi được độc lập". Điều này thể hiện mục tiêu cao cả nhất của Người là độc lập dân tộc và tự do cho nhân dân.',
    category: 'Quyền thiêng liêng của dân tộc',
    difficulty: 'easy'
  },
  {
    id: 'q2',
    question: 'Năm 1919, Hồ Chí Minh đã gửi bản Yêu sách của nhân dân An Nam tới hội nghị nào?',
    options: [
      'Hội nghị Pari',
      'Hội nghị Potsdam',
      'Hội nghị Giơnevơ',
      'Hội nghị Vécxây'
    ],
    correctAnswer: 3,
    explanation: 'Năm 1919, tại Hội nghị Vécxây (Pháp), Nguyễn Ái Quốc (Hồ Chí Minh) đã gửi bản Yêu sách 8 điểm, đòi quyền bình đẳng và tự do cho người dân Đông Dương.',
    category: 'Quyền thiêng liêng của dân tộc',
    difficulty: 'easy'
  },
  {
    id: 'q3',
    question: 'Khẩu hiệu "Không có gì quý hơn độc lập, tự do" được Hồ Chí Minh đưa ra vào năm nào?',
    options: [
      '1965',
      '1945',
      '1954',
      '1969'
    ],
    correctAnswer: 0,
    explanation: 'Năm 1965, trong bối cảnh chiến tranh chống Mỹ ác liệt, Hồ Chí Minh đã nêu lên khẩu hiệu bất hủ: "Không có gì quý hơn độc lập, tự do", khẳng định giá trị thiêng liêng nhất của dân tộc.',
    category: 'Quyền thiêng liêng của dân tộc',
    difficulty: 'medium'
  },
  {
    id: 'q4',
    question: 'Trong Tuyên ngôn độc lập năm 1945, Hồ Chí Minh viện dẫn tư tưởng từ những văn kiện nào?',
    options: [
      'Tuyên ngôn của Liên Hợp Quốc',
      'Chỉ Tuyên ngôn độc lập của Mỹ 1776',
      'Cả Tuyên ngôn độc lập của Mỹ 1776 và Tuyên ngôn nhân quyền của Pháp 1791',
      'Chỉ Tuyên ngôn nhân quyền của Pháp 1791'
    ],
    correctAnswer: 2,
    explanation: 'Hồ Chí Minh viện dẫn cả hai văn kiện lịch sử: Tuyên ngôn độc lập Mỹ 1776 và Tuyên ngôn nhân quyền và dân quyền Pháp 1791 để khẳng định quyền bình đẳng, tự do của các dân tộc.',
    category: 'Quyền thiêng liêng của dân tộc',
    difficulty: 'medium'
  },

  // Độc lập gắn tự do & hạnh phúc (4 câu)
  {
    id: 'q5',
    question: 'Theo Hồ Chí Minh, "Nước độc lập mà dân không hưởng hạnh phúc tự do" thì sao?',
    options: [
      'Cần thời gian để cải thiện',
      'Tạm thời chấp nhận được',
      'Vẫn có ý nghĩa',
      'Không có nghĩa lý gì'
    ],
    correctAnswer: 3,
    explanation: 'Hồ Chí Minh khẳng định: "Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì". Điều này thể hiện quan điểm độc lập phải gắn liền với hạnh phúc của nhân dân.',
    category: 'Độc lập gắn tự do & hạnh phúc',
    difficulty: 'easy'
  },
  {
    id: 'q6',
    question: 'Học thuyết "Tam dân" của Tôn Trung Sơn mà Hồ Chí Minh đánh giá cao bao gồm những nội dung nào?',
    options: [
      'Dân chủ, dân quyền, dân sinh',
      'Dân tộc độc lập, dân quyền tự do, dân sinh hạnh phúc',
      'Dân tộc, dân chủ, dân khoa',
      'Dân giàu, dân trí, dân khỏe'
    ],
    correctAnswer: 1,
    explanation: 'Hồ Chí Minh đánh giá cao học thuyết "Tam dân" của Tôn Trung Sơn gồm: dân tộc độc lập, dân quyền tự do và dân sinh hạnh phúc, thể hiện sự gắn kết giữa độc lập, tự do và hạnh phúc.',
    category: 'Độc lập gắn tự do & hạnh phúc',
    difficulty: 'medium'
  },
  {
    id: 'q7',
    question: 'Trong Chánh cương vắn tắt 1930, Hồ Chí Minh đề ra những nhiệm vụ gì ngay sau khi giành độc lập?',
    options: [
      'Làm cho dân có ăn, có mặc, có chỗ ở, có học hành',
      'Xây dựng quân đội hùng mạnh',
      'Chỉ tập trung phát triển kinh tế',
      'Thiết lập quan hệ ngoại giao'
    ],
    correctAnswer: 0,
    explanation: 'Ngay sau Cách mạng Tháng Tám 1945, Hồ Chí Minh yêu cầu thực hiện ngay: làm cho dân có ăn, có mặc, có chỗ ở, có học hành - thể hiện quan tâm thiết thực đến đời sống nhân dân.',
    category: 'Độc lập gắn tự do & hạnh phúc',
    difficulty: 'medium'
  },
  {
    id: 'q8',
    question: 'Ham muốn tột bậc của Hồ Chí Minh là gì?',
    options: [
      'Trở thành lãnh tụ được tôn kính',
      'Được quốc tế công nhận',
      'Xây dựng đất nước giàu mạnh',
      'Nước hoàn toàn độc lập, dân hoàn toàn tự do, ai cũng có cơm ăn áo mặc và được học hành'
    ],
    correctAnswer: 3,
    explanation: 'Hồ Chí Minh bộc bạch: "Tôi chỉ có một sự ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do, đồng bào ai cũng có cơm ăn áo mặc, ai cũng được học hành".',
    category: 'Độc lập gắn tự do & hạnh phúc',
    difficulty: 'easy'
  },

  // Độc lập thật sự (4 câu)
  {
    id: 'q9',
    question: 'Theo Hồ Chí Minh, độc lập thật sự phải đảm bảo điều gì?',
    options: [
      'Có lãnh thổ riêng',
      'Quyền tự quyết về ngoại giao, quân đội riêng, nền tài chính riêng',
      'Chỉ cần có chính phủ riêng',
      'Được quốc tế công nhận'
    ],
    correctAnswer: 1,
    explanation: 'Hồ Chí Minh nhấn mạnh độc lập thật sự phải bao gồm: quyền tự quyết về ngoại giao, có quân đội riêng, nền tài chính riêng... Thiếu những yếu tố này thì độc lập đó chẳng có ý nghĩa gì.',
    category: 'Độc lập thật sự',
    difficulty: 'medium'
  },
  {
    id: 'q10',
    question: 'Thực dân, đế quốc thường dùng chiêu bài gì để che đậy bản chất xâm lược?',
    options: [
      'Giáo dục và y tế',
      'Viện trợ kinh tế',
      'Xây dựng cơ sở hạ tầng',
      'Thành lập chính phủ bù nhìn, tuyên truyền "độc lập tự do" giả hiệu'
    ],
    correctAnswer: 3,
    explanation: 'Thực dân, đế quốc hay dùng chiêu bài mị dân, thành lập các chính phủ bù nhìn bản xứ, tuyên truyền cái gọi là "độc lập tự do" giả hiệu để che đậy bản chất xâm lược.',
    category: 'Độc lập thật sự',
    difficulty: 'easy'
  },
  {
    id: 'q11',
    question: 'Độc lập thật sự theo Hồ Chí Minh phải như thế nào?',
    options: [
      'Độc lập có điều kiện',
      'Độc lập hoàn toàn và triệt để trên tất cả các lĩnh vực',
      'Chỉ cần độc lập về chính trị',
      'Độc lập từng bước, từng phần'
    ],
    correctAnswer: 1,
    explanation: 'Hồ Chí Minh khẳng định độc lập dân tộc phải là độc lập thật sự, hoàn toàn và triệt để trên tất cả các lĩnh vực: chính trị, kinh tế, quân sự, ngoại giao...',
    category: 'Độc lập thật sự',
    difficulty: 'medium'
  },
  {
    id: 'q12',
    question: 'Sau Cách mạng Tháng Tám, Hồ Chí Minh đã sử dụng biện pháp nào để bảo vệ nền độc lập?',
    options: [
      'Chỉ dùng vũ lực',
      'Dựa vào sự giúp đỡ từ bên ngoài',
      'Chỉ dùng ngoại giao',
      'Kết hợp nhiều biện pháp, trong đó có ngoại giao'
    ],
    correctAnswer: 3,
    explanation: 'Trong hoàn cảnh khó khăn sau Cách mạng Tháng Tám, Hồ Chí Minh cùng Chính phủ đã sử dụng nhiều biện pháp, trong đó có biện pháp ngoại giao, để bảo đảm nền độc lập thật sự của đất nước.',
    category: 'Độc lập thật sự',
    difficulty: 'medium'
  },

  // Độc lập gắn thống nhất (3 câu)
  {
    id: 'q13',
    question: 'Trong Thư gửi đồng bào Nam Bộ 1946, Hồ Chí Minh khẳng định điều gì?',
    options: [
      'Cần thời gian để thống nhất',
      'Đồng bào Nam Bộ là dân nước Việt Nam, sông có thể cạn núi có thể mòn nhưng chân lý đó không đổi',
      'Nam Bộ cần độc lập riêng',
      'Nam Bộ nên tự trị'
    ],
    correctAnswer: 1,
    explanation: 'Hồ Chí Minh khẳng định: "Đồng bào Nam Bộ là dân nước Việt Nam. Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi" - thể hiện quyết tâm bảo vệ thống nhất đất nước.',
    category: 'Độc lập gắn thống nhất',
    difficulty: 'easy'
  },
  {
    id: 'q14',
    question: 'Năm 1958, Hồ Chí Minh đã khẳng định điều gì về Việt Nam?',
    options: [
      'Hai miền cần phát triển riêng',
      'Nước Việt Nam là một, dân tộc Việt Nam là một',
      'Việt Nam cần chia thành hai miền',
      'Cần thời gian để thống nhất'
    ],
    correctAnswer: 1,
    explanation: 'Tháng 2/1958, sau Hiệp định Giơnevơ khi đất nước tạm thời bị chia cắt, Hồ Chí Minh khẳng định: "Nước Việt Nam là một, dân tộc Việt Nam là một" - thể hiện ý chí thống nhất Tổ quốc.',
    category: 'Độc lập gắn thống nhất',
    difficulty: 'medium'
  },
  {
    id: 'q15',
    question: 'Trong Di chúc, Hồ Chí Minh tin tưởng điều gì?',
    options: [
      'Nên chấp nhận chia cắt tạm thời',
      'Cần viện trợ quốc tế',
      'Chiến tranh sẽ kéo dài',
      'Tổ quốc nhất định thống nhất, đồng bào Nam Bắc nhất định sum họp một nhà'
    ],
    correctAnswer: 3,
    explanation: 'Trong Di chúc, Hồ Chí Minh thể hiện niềm tin tuyệt đối: "Tổ quốc ta nhất định sẽ thống nhất. Đồng bào Nam, Bắc nhất định sẽ sum họp một nhà" - di nguyện thiêng liêng về thống nhất đất nước.',
    category: 'Độc lập gắn thống nhất',
    difficulty: 'easy'
  },

  // PHẦN II: CÁCH MẠNG GIẢI PHÓNG DÂN TỘC (15 câu)
  
  // Con đường cách mạng vô sản (3 câu)
  {
    id: 'q16',
    question: 'Tại sao Hồ Chí Minh không chọn con đường cách mạng tư sản?',
    options: [
      'Vì không được ủng hộ',
      'Vì quá lỗi thời',
      'Vì cách mạng tư sản chỉ là tự do giả dối, không giải phóng được thuộc địa',
      'Vì khó thực hiện'
    ],
    correctAnswer: 2,
    explanation: 'Hồ Chí Minh nhận thấy cách mạng tư sản "tiếng là cộng hòa và dân chủ, kỳ thực trong thì nó tước lục công nông, ngoài thì nó áp bức thuộc địa" - không phải con đường giải phóng thuộc địa.',
    category: 'Con đường cách mạng vô sản',
    difficulty: 'medium'
  },
  {
    id: 'q17',
    question: 'Sự kiện nào đã ảnh hưởng sâu sắc đến việc Hồ Chí Minh lựa chọn con đường cứu nước?',
    options: [
      'Cách mạng Tháng Mười Nga 1917',
      'Cách mạng Mỹ 1776',
      'Cách mạng Trung Quốc 1911',
      'Cách mạng Pháp 1789'
    ],
    correctAnswer: 0,
    explanation: 'Cách mạng Tháng Mười Nga 1917 đã ảnh hưởng sâu sắc đến Hồ Chí Minh. Người cho rằng đây là cách mạng thành công đến nơi, dân chúng được hưởng hạnh phúc tự do thật sự.',
    category: 'Con đường cách mạng vô sản',
    difficulty: 'easy'
  },
  {
    id: 'q18',
    question: 'Năm 1920, văn kiện nào của Lênin đã giúp Hồ Chí Minh tìm ra con đường cứu nước?',
    options: [
      'Nhà nước và cách mạng',
      'Làm gì',
      'Chủ nghĩa đế quốc',
      'Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và thuộc địa'
    ],
    correctAnswer: 3,
    explanation: 'Năm 1920, sau khi đọc "Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa" của Lênin, Hồ Chí Minh đã tìm thấy con đường cứu nước: con đường cách mạng vô sản.',
    category: 'Con đường cách mạng vô sản',
    difficulty: 'medium'
  },

  // Vai trò Đảng Cộng sản (3 câu)
  {
    id: 'q19',
    question: 'Theo Hồ Chí Minh, cách mạng trước hết phải có cái gì?',
    options: [
      'Đảng cách mạng',
      'Vũ khí',
      'Quân đội',
      'Căn cứ địa'
    ],
    correctAnswer: 0,
    explanation: 'Trong "Đường cách mệnh" (1927), Hồ Chí Minh khẳng định: "Cách mệnh trước hết phải có đảng cách mệnh. Đảng có vững cách mệnh mới thành công".',
    category: 'Vai trò Đảng Cộng sản',
    difficulty: 'easy'
  },
  {
    id: 'q20',
    question: 'Đảng Cộng sản Việt Nam được thành lập vào năm nào?',
    options: [
      '1925',
      '1945',
      '1930',
      '1941'
    ],
    correctAnswer: 2,
    explanation: 'Đảng Cộng sản Việt Nam được thành lập ngày 3/2/1930 do Hồ Chí Minh sáng lập và lãnh đạo, thống nhất các tổ chức cộng sản trong nước.',
    category: 'Vai trò Đảng Cộng sản',
    difficulty: 'easy'
  },
  {
    id: 'q21',
    question: 'Theo Hồ Chí Minh, Đảng Lao động Việt Nam vừa là đảng của giai cấp công nhân vừa là gì?',
    options: [
      'Đảng của thanh niên',
      'Đảng của dân tộc Việt Nam',
      'Đảng của nông dân',
      'Đảng của trí thức'
    ],
    correctAnswer: 1,
    explanation: 'Tại Đại hội II (1951), Hồ Chí Minh khẳng định: "Chính vì Đảng Lao động Việt Nam là Đảng của giai cấp công nhân và nhân dân lao động, cho nên nó phải là Đảng của dân tộc Việt Nam".',
    category: 'Vai trò Đảng Cộng sản',
    difficulty: 'medium'
  },

  // Đại đoàn kết toàn dân (3 câu)
  {
    id: 'q22',
    question: 'Theo Hồ Chí Minh, cách mạng là việc của ai?',
    options: [
      'Của chung cả dân chúng',
      'Của giai cấp công nhân',
      'Của quân đội',
      'Của Đảng Cộng sản'
    ],
    correctAnswer: 0,
    explanation: 'Hồ Chí Minh khẳng định: "Cách mệnh là việc chung cả dân chúng chứ không phải việc một hai người" - thể hiện quan điểm đại đoàn kết toàn dân.',
    category: 'Đại đoàn kết toàn dân',
    difficulty: 'easy'
  },
  {
    id: 'q23',
    question: 'Trong Lời kêu gọi toàn quốc kháng chiến 1946, Hồ Chí Minh kêu gọi ai đứng lên?',
    options: [
      'Chỉ đảng viên cộng sản',
      'Chỉ thanh niên',
      'Bất kỳ ai là người Việt Nam, không chia tôn giáo, đảng phái, dân tộc',
      'Chỉ nam giới'
    ],
    correctAnswer: 2,
    explanation: 'Hồ Chí Minh kêu gọi: "Bất kỳ đàn ông, đàn bà, bất kỳ người già, người trẻ, không chia tôn giáo, đảng phái, dân tộc. Hễ là người Việt Nam thì phải đứng lên" - thể hiện tinh thần đại đoàn kết.',
    category: 'Đại đoàn kết toàn dân',
    difficulty: 'medium'
  },
  {
    id: 'q24',
    question: 'Theo Hồ Chí Minh, ai là "gốc cách mệnh"?',
    options: [
      'Tiểu thương',
      'Công nhân và nông dân',
      'Tư sản dân tộc',
      'Trí thức'
    ],
    correctAnswer: 1,
    explanation: 'Hồ Chí Minh khẳng định "công nông là người chủ cách mệnh... là gốc cách mệnh" vì họ đông đảo, cách mạng nhất và bị bóc lột nặng nề nhất.',
    category: 'Đại đoàn kết toàn dân',
    difficulty: 'medium'
  },

  // Giành thắng lợi trước chính quốc (3 câu)
  {
    id: 'q25',
    question: 'Theo Đại hội VI Quốc tế Cộng sản (1928), cách mạng thuộc địa phụ thuộc vào điều gì?',
    options: [
      'Tự lực cánh sinh',
      'Thắng lợi của cách mạng vô sản ở chính quốc',
      'Viện trợ quốc tế',
      'Lực lượng nội tại'
    ],
    correctAnswer: 1,
    explanation: 'Đại hội VI Quốc tế Cộng sản (1928) cho rằng chỉ có thể giải phóng hoàn toàn các nước thuộc địa khi giai cấp vô sản giành thắng lợi ở các nước tư bản tiên tiến.',
    category: 'Giành thắng lợi trước chính quốc',
    difficulty: 'hard'
  },
  {
    id: 'q26',
    question: 'Hồ Chí Minh cho rằng mối quan hệ giữa cách mạng thuộc địa và cách mạng vô sản ở chính quốc như thế nào?',
    options: [
      'Chính quốc quyết định thuộc địa',
      'Độc lập hoàn toàn với nhau',
      'Thuộc địa phụ thuộc vào chính quốc',
      'Quan hệ bình đẳng, tác động qua lại lẫn nhau'
    ],
    correctAnswer: 3,
    explanation: 'Hồ Chí Minh chỉ rõ mối quan hệ khăng khít, tác động qua lại lẫn nhau - mối quan hệ bình đẳng, không lệ thuộc giữa cách mạng thuộc địa và cách mạng vô sản ở chính quốc.',
    category: 'Giành thắng lợi trước chính quốc',
    difficulty: 'hard'
  },
  {
    id: 'q27',
    question: 'Hồ Chí Minh ví chủ nghĩa tư bản như con gì có hai vòi bám vào hai nơi?',
    options: [
      'Con đỉa',
      'Con bạch tuộc',
      'Con cá mập',
      'Con rắn'
    ],
    correctAnswer: 0,
    explanation: 'Trong "Bản án chế độ thực dân Pháp" (1925), Hồ Chí Minh ví: "Chủ nghĩa tư bản là một con đỉa có một cái vòi bám vào giai cấp vô sản ở chính quốc và một cái vòi khác bám vào giai cấp vô sản ở thuộc địa".',
    category: 'Giành thắng lợi trước chính quốc',
    difficulty: 'medium'
  },

  // Bạo lực cách mạng (3 câu)
  {
    id: 'q28',
    question: 'Theo C.Mác, bạo lực đóng vai trò gì trong lịch sử?',
    options: [
      'Là công cụ đàn áp',
      'Là nguyên nhân gây chiến tranh',
      'Là bà đỡ của một chế độ xã hội cũ đang thai nghén chế độ mới',
      'Là phương pháp duy nhất'
    ],
    correctAnswer: 2,
    explanation: 'C.Mác khẳng định: "Bạo lực là bà đỡ của một chế độ xã hội cũ đang thai nghén một chế độ mới" - thể hiện vai trò tất yếu của bạo lực cách mạng.',
    category: 'Bạo lực cách mạng',
    difficulty: 'medium'
  },
  {
    id: 'q29',
    question: 'Hồ Chí Minh cho rằng cần dùng bạo lực cách mạng để làm gì?',
    options: [
      'Để chinh phục',
      'Để trả thù',
      'Để chống lại bạo lực phản cách mạng',
      'Để đàn áp'
    ],
    correctAnswer: 2,
    explanation: 'Hồ Chí Minh khẳng định: "Cần dùng bạo lực cách mạng chống lại bạo lực phản cách mạng, giành lấy chính quyền và bảo vệ chính quyền".',
    category: 'Bạo lực cách mạng',
    difficulty: 'easy'
  },
  {
    id: 'q30',
    question: 'Trong Cách mạng Tháng Tám 1945, hình thức đấu tranh chủ yếu là gì?',
    options: [
      'Chỉ đấu tranh chính trị',
      'Đấu tranh ngoại giao',
      'Tổng khởi nghĩa, chủ yếu dựa vào lực lượng chính trị kết hợp vũ trang',
      'Chỉ đấu tranh vũ trang'
    ],
    correctAnswer: 2,
    explanation: 'Cách mạng Tháng Tám 1945 thành công với hình thức tổng khởi nghĩa của quần chúng nhân dân, chủ yếu dựa vào lực lượng chính trị, kết hợp với lực lượng vũ trang.',
    category: 'Bạo lực cách mạng',
    difficulty: 'hard'
  },
];
