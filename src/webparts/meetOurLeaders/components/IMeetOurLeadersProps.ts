import { WebPartContext } from "@microsoft/sp-webpart-base";
import { PageContext } from "@microsoft/sp-page-context";

export interface IMeetOurLeadersProps {
  description: string;
  context: WebPartContext;
  pageContext: PageContext;
}
