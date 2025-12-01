// Định nghĩa types cho nội dung
export interface ContentSection {
  id: string;
  title: string;
  content: string;
  subsections?: ContentSubsection[];
}

export interface ContentSubsection {
  id: string;
  title: string;
  content: string;
  quotes?: Quote[];
}

export interface Quote {
  text: string;
  author?: string;
  year?: number;
  source?: string;
}

export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  icon?: string;
  category: 'historical' | 'revolutionary' | 'declaration';
}

