import { IssueGh } from "types";

export const extractSubtitle = (text: string) => text.slice(
    text.indexOf('<subtitle>') + 10,
    text.lastIndexOf('</subtitle>'),
  );
  
 export const extractImage = (text: string) => text.slice(
    text.indexOf('<image>') + 7,
    text.lastIndexOf('</image>'),
  );


  function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  
export const formatDate = (date: Date): string =>
[
  padTo2Digits(date.getMonth() + 1),
  padTo2Digits(date.getDate()),
  date.getFullYear(),
].join('/');


export const mapIssueGh = (issue: IssueGh
    ) =>( {  title: issue.title,
body: issue.body.split('</metadata>')[1],
createdAt: formatDate(new Date(issue.created_at)),
subtitle: extractSubtitle(issue.body),
image: extractImage(issue.body),
number: issue.number})