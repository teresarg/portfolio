
import { endpoint } from '@octokit/endpoint';
import ReactMarkdown from 'react-markdown';
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Styled from "styled-components";
import { Issue } from 'types';
import { mapIssueGh } from 'mapper';

const Post = (): React.ReactElement => {
    const location = useLocation();
    const [issue, setIssue] = React.useState<Issue>();
    const params = useParams();

    const { id } = params;

    React.useEffect(() => {
        async function fetchIssue() {

            const { url, ...options } = endpoint(`GET /repos/:owner/:repo/issues/${id}`, {
                owner: 'teresarg',
                repo: 'portfolio',
                issue_number: id,
            })

            const response = await fetch(url, options as RequestInit)
            const issue = await response.json();
            setIssue(mapIssueGh(issue))
        }

        if (!location.state) {
            fetchIssue()
        } else {
            const { body, image, createdAt, title } = location.state as { title: string, body: string, image: string, createdAt: string } || {}
            setIssue({ body, image, createdAt, title } as Issue)
        }

    }, [])

    return <PostWrapper><div dangerouslySetInnerHTML={{ __html: issue?.image || '' }} />{issue?.createdAt}<h2>{issue?.title}</h2><ReactMarkdown children={issue?.body || ''} /></PostWrapper>
}

const PostWrapper = Styled.section`
    text-align: justify;
    padding: 2rem;
    img {
        width:30rem;
    }

    @media (min-width: 768px) {
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
} 
`


export default Post;