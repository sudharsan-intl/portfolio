import "./assets/scss/main.scss";
import "odometer/themes/odometer-theme-default.css"; // Import theme
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";
const PortfolioModal = lazy(() => import("@/components/modals/PortfolioModal"));
const BlogModal = lazy(() => import("@/components/modals/BlogModal"));
const ContentProvider = lazy(() =>
  import("@/contexts/ContentContext").then((m) => ({
    default: m.ContentProvider,
  }))
);
const ScrollTop = lazy(() => import("@/components/common/ScrollTop"));
const Sidebar = lazy(() => import("@/components/common/Sidebar"));
const GlobalEffectsProvider = lazy(
  () => import("@/components/common/GlobalEffectsProvider")
);
const ScrollTopBehaviour = lazy(
  () => import("./components/common/ScrollToTopBehaviour")
);


const HomepageLight7 = lazy(() => import("./pages/light-homes/index-07-white"));

const LightHomepagesLayout = lazy(() => import("./pages/light-homes/layout"));

function App() {
  return (
    <>
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ height: "100vh" }}
          >
            <h2>Something went wrong.</h2>
            <pre style={{ color: "red" }}>{error.message}</pre>
            <button
              className="btn btn-primary mt-3"
              onClick={resetErrorBoundary}
            >
              Try again
            </button>
          </div>
        )}
      >
        <Suspense
          fallback={
            <div
              className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-white"
              style={{ zIndex: 1050 }}
            >
              <div
                className="spinner-border text-primary"
                role="status"
                style={{ width: "3rem", height: "3rem" }}
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <ContentProvider>
            <Routes>
              <Route path="/">
                
                // light pages
               
                <Route
                  path="/"
                  element={
                    <LightHomepagesLayout>
                      <HomepageLight7 />
                    </LightHomepagesLayout>
                  }
                />
               
              </Route>
            </Routes>

            <div className="modals-wrapper">
              <PortfolioModal />
              <BlogModal />
              <Sidebar />
            </div>
            <ScrollTop />
            <ToastContainer
              position="bottom-right"
              // autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <ScrollTopBehaviour />
            <GlobalEffectsProvider />
          </ContentProvider>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
