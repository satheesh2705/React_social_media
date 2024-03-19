import { Routes, Route} from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import {DataProvider} from"./context/DataContext";
import User from "./User";
import Login from "./Login";


function App() {

  return (
    <div className="App">
      <DataProvider>
        <Header title="Social_Media_App"/>
        <Nav />
        {/* <PostPage /> */}

        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path= "post"> 
            <Route index element = {<NewPost/>} />
            <Route path =":id" element={<PostPage />} />
          </Route>
            <Route path= "/edit/:id" element ={<EditPost/>}/>
            <Route path ="about" element = {<About />} />
            <Route path ="login" element = {<Login />} />
            <Route path ="user" element = {<User />} />
            <Route path ="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
} 

export default App;
