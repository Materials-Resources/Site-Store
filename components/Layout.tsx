import { Navigation } from "./Navigation";
import { Component } from "react";
import { Footer } from "./Footer";

export default class Layout extends Component<{ children: any }> {
  render() {
    let { children } = this.props;
    return (
      <>
        <Navigation />
        <div className={"m-10"}>{children}</div>
        <Footer />
      </>
    );
  }
}
