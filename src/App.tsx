import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { GuestList } from "./guest/GuestList";
import { GuestCreate } from "./guest/GuestCreate";
import { GuestEdit } from "./guest/GuestEdit";
import { GuestShow } from "./guest/GuestShow";
import { ConsultantList } from "./consultant/ConsultantList";
import { ConsultantCreate } from "./consultant/ConsultantCreate";
import { ConsultantEdit } from "./consultant/ConsultantEdit";
import { ConsultantShow } from "./consultant/ConsultantShow";
import { HomeArticleList } from "./homeArticle/HomeArticleList";
import { HomeArticleCreate } from "./homeArticle/HomeArticleCreate";
import { HomeArticleEdit } from "./homeArticle/HomeArticleEdit";
import { HomeArticleShow } from "./homeArticle/HomeArticleShow";
import { HomeEventList } from "./homeEvent/HomeEventList";
import { HomeEventCreate } from "./homeEvent/HomeEventCreate";
import { HomeEventEdit } from "./homeEvent/HomeEventEdit";
import { HomeEventShow } from "./homeEvent/HomeEventShow";
import { HomeInfographicList } from "./homeInfographic/HomeInfographicList";
import { HomeInfographicCreate } from "./homeInfographic/HomeInfographicCreate";
import { HomeInfographicEdit } from "./homeInfographic/HomeInfographicEdit";
import { HomeInfographicShow } from "./homeInfographic/HomeInfographicShow";
import { HomeJournalList } from "./homeJournal/HomeJournalList";
import { HomeJournalCreate } from "./homeJournal/HomeJournalCreate";
import { HomeJournalEdit } from "./homeJournal/HomeJournalEdit";
import { HomeJournalShow } from "./homeJournal/HomeJournalShow";
import { HomeVideoList } from "./homeVideo/HomeVideoList";
import { HomeVideoCreate } from "./homeVideo/HomeVideoCreate";
import { HomeVideoEdit } from "./homeVideo/HomeVideoEdit";
import { HomeVideoShow } from "./homeVideo/HomeVideoShow";
import { InteractionSectionList } from "./interactionSection/InteractionSectionList";
import { InteractionSectionCreate } from "./interactionSection/InteractionSectionCreate";
import { InteractionSectionEdit } from "./interactionSection/InteractionSectionEdit";
import { InteractionSectionShow } from "./interactionSection/InteractionSectionShow";
import { TrainingCourseList } from "./trainingCourse/TrainingCourseList";
import { TrainingCourseCreate } from "./trainingCourse/TrainingCourseCreate";
import { TrainingCourseEdit } from "./trainingCourse/TrainingCourseEdit";
import { TrainingCourseShow } from "./trainingCourse/TrainingCourseShow";
import { HomeBookList } from "./homeBook/HomeBookList";
import { HomeBookCreate } from "./homeBook/HomeBookCreate";
import { HomeBookEdit } from "./homeBook/HomeBookEdit";
import { HomeBookShow } from "./homeBook/HomeBookShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My app"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Guest"
          list={GuestList}
          edit={GuestEdit}
          create={GuestCreate}
          show={GuestShow}
        />
        <Resource
          name="Consultant"
          list={ConsultantList}
          edit={ConsultantEdit}
          create={ConsultantCreate}
          show={ConsultantShow}
        />
        <Resource
          name="HomeArticle"
          list={HomeArticleList}
          edit={HomeArticleEdit}
          create={HomeArticleCreate}
          show={HomeArticleShow}
        />
        <Resource
          name="HomeEvent"
          list={HomeEventList}
          edit={HomeEventEdit}
          create={HomeEventCreate}
          show={HomeEventShow}
        />
        <Resource
          name="HomeInfographic"
          list={HomeInfographicList}
          edit={HomeInfographicEdit}
          create={HomeInfographicCreate}
          show={HomeInfographicShow}
        />
        <Resource
          name="HomeJournal"
          list={HomeJournalList}
          edit={HomeJournalEdit}
          create={HomeJournalCreate}
          show={HomeJournalShow}
        />
        <Resource
          name="HomeVideo"
          list={HomeVideoList}
          edit={HomeVideoEdit}
          create={HomeVideoCreate}
          show={HomeVideoShow}
        />
        <Resource
          name="InteractionSection"
          list={InteractionSectionList}
          edit={InteractionSectionEdit}
          create={InteractionSectionCreate}
          show={InteractionSectionShow}
        />
        <Resource
          name="TrainingCourse"
          list={TrainingCourseList}
          edit={TrainingCourseEdit}
          create={TrainingCourseCreate}
          show={TrainingCourseShow}
        />
        <Resource
          name="HomeBook"
          list={HomeBookList}
          edit={HomeBookEdit}
          create={HomeBookCreate}
          show={HomeBookShow}
        />
      </Admin>
    </div>
  );
};

export default App;
