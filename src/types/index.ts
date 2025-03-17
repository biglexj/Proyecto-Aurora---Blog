// Interfaces para canales
export interface ChannelContent {
  name: string;
  icon: string;
  subscribers?: string;
  id?: string;
  link: string;
  content?: string[];
}

export interface Channel {
  channelId: string;
  channel: ChannelContent;
  video?: string;
  description?: string;
}

// Interfaces para estilos personalizados
export interface CustomCSSProperties extends React.CSSProperties {
  '--position'?: number;
  '--quantity'?: number;
  [key: string]: string | number | undefined;
}

// Interfaces para eventos
export interface CustomMouseEvent {
  clientX: number;
  clientY: number;
}

// Interfaces para componentes
export interface ChildrenProps {
  children: React.ReactNode;
}