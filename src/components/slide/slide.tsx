import { Button } from '@metrostar/comet-uswds';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

export const Slide = (props): React.ReactElement => {
  const {
    next = '',
    back = '',
    header = '',
    showBack = true,
    showNext = true,
    backDisabled = false,
    nextDisabled = false,
    backText = (
      <FormattedMessage
        id="app.slide.backButton"
        description="Default text for button to move back a slide."
        defaultMessage="Back"
      />
    ),
    nextText = (
      <FormattedMessage
        id="app.slide.nextButton"
        description="Default text for button to move forward a slide."
        defaultMessage="Continue"
      />
    ),
    helpText = (
      <FormattedMessage
        id="app.slide.helpText"
        description="Default text to tell user that the current slide is incomplete."
        defaultMessage="Please enter all required information above."
      />
    ),
  } = props;

  if (nextDisabled) {
    props['data-incomplete'] = true;
  }

  return (
    <div className="grid-container usa-content slide-content">
      {header && (
        <div className="grid-row">
          <div className="grid-col">
            <h1>{header}</h1>
          </div>
        </div>
      )}
      <div className="grid-row">{props.children}</div>

      <div className="grid-row padding-top-2">
        {showBack && (
          <Link to={back}>
            <Button
              id="app.slide.back"
              className="usa-button--outline"
              disabled={backDisabled}
            >
              {backText}
            </Button>
          </Link>
        )}
        {showBack && showNext && ' '}
        {showNext && (
          <Link to={next}>
            <Button id="app.slide.continue" disabled={nextDisabled}>
              {nextText}
            </Button>
          </Link>
        )}
        {showNext && nextDisabled && (
          <p className="required-text hidden">
            <strong>{helpText}</strong>
          </p>
        )}
      </div>
    </div>
  );
};
