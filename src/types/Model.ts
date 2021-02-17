export interface Story {
  id: string;
  source: number;
  user: string;
  avatar: number;
  video?: number;
}

export type SnapchatRoutes = {
  Auth: undefined;
  Snapchat: undefined;
  Main: undefined;
  Story: {story: Story};
};
