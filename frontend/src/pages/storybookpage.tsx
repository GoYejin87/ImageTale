import { useStoryBookData } from "../hooks/usestorybookdata";
import { useParams } from "react-router-dom";
import RenderStoryBook from "../components/storybookpage/RenderStoryBook";
import Loading from "../components/Loading";
import * as S from "../styles/pages/StoryBookPage.style";

export default function StoryBookPage(): JSX.Element {
  const { storyBookId } = useParams();
  const { isLoading, storyBookData } = useStoryBookData(storyBookId);

  return (
    <S.StoryBookPageLayout>
      {isLoading && <Loading />}
      {storyBookData && <RenderStoryBook storyBookData={storyBookData} />}
    </S.StoryBookPageLayout>
  );
}
