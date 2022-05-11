import { HomeArticleWhereInput } from "./HomeArticleWhereInput";
import { HomeArticleOrderByInput } from "./HomeArticleOrderByInput";

export type HomeArticleFindManyArgs = {
  where?: HomeArticleWhereInput;
  orderBy?: Array<HomeArticleOrderByInput>;
  skip?: number;
  take?: number;
};
