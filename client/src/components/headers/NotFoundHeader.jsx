import React from 'react';

const NotFoundHeader = props => (
    <nav className="navbar navbar-inverse navbar-fixed-top"
         role="navigation" id="error404-header">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle"
                data-toggle="collapse" data-target=".navbar-ex1-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" id="error404-header-txt" href="/"><strong>PostIt</strong></a>
      </div>
    </nav>
  );
export default NotFoundHeader;
