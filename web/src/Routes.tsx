// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/pinned" page={PinnedPage} name="pinned" />
      <Route path="/wordCloud" page={WordCloudPage} name="wordCloud" />
      <Route path="/narratives" page={NarrativesPage} name="narratives" />
      <Route path="/patterns" page={PatternsPage} name="patterns" />
      <Route path="/insights" page={InsightsPage} name="insights" />
      <Route path="/viewVoiceEntry" page={ViewVoiceEntryPage} name="viewVoiceEntry" />
      <Route path="/viewTextEntry" page={ViewTextEntryPage} name="viewTextEntry" />
      <Route path="/newVoiceEntry" page={NewVoiceEntryPage} name="newVoiceEntry" />
      <Route path="/newTextEntry" page={NewTextEntryPage} name="newTextEntry" />
      <Route path="/home" page={HomePage} name="home" />
      <Route path="/verify" page={VerifyPage} name="verify" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/" page={LandingPage} name="landing" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
