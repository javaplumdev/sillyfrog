type Feed = {
  saves: [];
  likes: [];
  postId: string;
  dislikes: [];
  timestamp: { seconds: number };
  feed_content: string;
  label: string;
};

type FeedList = {
  saves: [];
  likes: [];
  postId: string;
  dislikes: [];
  timestamp: string;
  feed_content: string;
}[];
