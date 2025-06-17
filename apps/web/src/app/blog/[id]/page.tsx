//export function generateMetadata(params: { params: { id: string } }) {
//  return {
//    title: `Blog - ${params.params.id}`,
//  };

import HeaderComponent from "@/components/layout/header";
import MainComponent from "@/components/layout/main";
import FooterComponent from "@/components/layout/footer";

//}
export default function Page({ params }: { params: { id: string } }) {
  return <>
    <HeaderComponent />
    <MainComponent>
      Blog {params.id}
    </MainComponent>
    <FooterComponent />
  </>;
};
