import React, { Component } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { history } from "./../redux/store";

import BlogMainPage from "./../pages/BlogMainPage";
import PostEditPage from "./../pages/PostEditPage";
import SingleBlogPage from "./../pages/SingleBlogPage";
import AdminPage from "./../pages/AdminPage";
import LoginRegisterPage from "./../pages/LoginRegisterPage";

export default class Router extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/auth" component={LoginRegisterPage} />
          <Route path="/create-post" component={PostEditPage} />
          <Route path="/admin/post/:id/edit" component={PostEditPage} />
          <Route
            path="/admin/post/:id"
            render={props => <SingleBlogPage {...props} admin={true} />}
          />
          <Route path="/post/:id" component={SingleBlogPage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/" exact component={BlogMainPage} />
        </Switch>
      </ConnectedRouter>
    );
  }
}
