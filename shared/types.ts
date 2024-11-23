export interface IUser {
  firstName?: string;
  lastName?: string;
  email: string;
  userName?: string;
  password: string;
  dob: Date;
  about?: string;
  streams?: string[];
  uuid: string;
}

export interface Message {
  user: string;
  message: string;
}

export interface Chat {
  uuid: string;
  messages: Message[];
  stream: string;
  createdAt: Date;
  updatedAt: Date;
  status: "ACTIVE" | "INACTIVE" | "DELETED";
}

export interface Stream {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  user: string;
  chat: string;
  likes: string[];
  isPrivate: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface StreamConfig {
  streamKey: string;
  userId: string;
  title: string;
  quality: string;
  platform: "mobile" | "desktop";
}

export interface StreamStatus {
  isLive: boolean;
  viewerCount: number;
  duration: number;
  quality: string;
}
