import React from "react";
import Link from "next/link";
import * as styles from "./styles";
import { cx } from "emotion";
import typography from "./typography";

type State = {
   selected?: string;
};

type Props = {
   rand: string;
};

const tabs: Record<string, string[]> = {
   Website: ["Builder", "My Website"],
   Google_Business_Account: ["Setup Account"],
   Facebook_Business_Account: ["Setup Account"],
   Create_Ads: ["Google", "Facebook"],
};
export default class SideNav extends React.Component<Props, State> {
   state: State = {
      selected: "Builder",
   };
   renderTab = (tabText: string, tabName: string, tabHref: string, onClose: () => void) => {
      return (
         <Link
            href={tabHref === "Builder"?"/":tabHref.toLowerCase()}
            as={tabHref}
            key={tabText}
            className={cx(styles.eachTag, this.state.selected === tabName && styles.selectedTag)}
         >
            <div onClick={onClose}>
               <div>{tabText}</div>
            </div>
         </Link>
      );
   };
   render() {
      return (
         <div className={styles.sideBarWrap}>
            {Object.keys(tabs).map((k) => {
               return (
                  <>
                     <div key={k} className={cx(typography.medium14, typography.violet)}>
                        {k.split("_").join(" ")}
                     </div>
                     {tabs[k].map((tab) => this.renderTab(tab, tab, tab, () => {}))}
                  </>
               );
            })}
         </div>
      );
   }
}
