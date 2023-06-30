import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="anshu" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;

const Layout = () => {
  return (
    <>
      <h1>Layout </h1>
      <Outlet/> 
    </>
  );
};
const Root = () => {
  return (
    <>
      <div className="flex gap-3">
        <Link to={"/"}>Home</Link>
        {/* <Link to={"/about"}>About</Link> */}
        <Link to={"/anshu"}>anshu</Link>
        <Link to={"/anshu/about"}>anshu about</Link>
        <Link to={"/anshu/help"}>anshu help</Link>
      </div>
      <Outlet />
    </>
  );
};

const Home = () => {
  return (
    <>
      <h1>hello from Home</h1>
    </>
  );
};
const About = () => {
  return (
    <>
      <h1>hello from about</h1>
    </>
  );
};

const Help = () => {
  return (
    <>
      <h1>hello from Help</h1>
    </>
  );
};
