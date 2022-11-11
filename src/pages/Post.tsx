import ReactMarkdown from 'react-markdown';
import { useLocation } from "react-router-dom";
import Styled from "styled-components";

const Post = (): React.ReactElement => {
    const location = useLocation();
    const { body, image, createdAt, title } = location.state as { title: string, body: string, image: string, createdAt: string };

    return <PostWrapper><div dangerouslySetInnerHTML={{ __html: image }} />{createdAt}<h2>{title}</h2><ReactMarkdown children={body} /></PostWrapper>
}

const PostWrapper = Styled.section`
    text-align: justify;
    padding: 15rem 30rem;

    & > div > img {
        border-radius: 2rem;
        display: flex;
        width: 60rem;
        margin: 0 auto 5rem;
    }

    p > img {
        width: 40rem;
        display: flex;
        margin: auto;
    }
`


export default Post;