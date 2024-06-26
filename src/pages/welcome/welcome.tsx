import { Slide } from '@src/components/slide/slide.tsx';
import { organization } from '@src/data/organization';
import React from 'react';
import { FormattedMessage } from 'react-intl';

export const Welcome = (): React.ReactElement => {
  const headerText = (
    <FormattedMessage
      id="app.slides.welcome.header"
      description="Text for the header of the slide."
      defaultMessage="Welcome!"
    />
  );

  const nextButtonText = (
    <FormattedMessage
      id="app.slides.welcome.nextButton"
      description="Text for button to advance to the next slide."
      defaultMessage="Get started"
    />
  );

  return (
    <Slide
      next="/before-you-begin"
      nextText={nextButtonText}
      header={headerText}
      showBack={false}
    >
      <p className="usa-font-lead">
        <FormattedMessage
          id="app.slides.welcome.intro"
          description="Introductory paragraph."
          defaultMessage="This is {stateName}'s {year} Summer Electronic Benefit Transfer (EBT) Program for Children. If your household qualifies, you can receive a EBT card with money for {italicized} student."
          values={{
            italicized: <i>each</i>,
            stateName: organization.state,
            year: organization.year,
          }}
        />
      </p>

      <p>
        <FormattedMessage
          id="app.slides.welcome.paperInstructions"
          description="Instructions on how to apply via paper application."
          defaultMessage="This application will guide you through the process of applying for benefits. If you want to use a {link}, you can print it and return it to {address}."
          values={{
            buttonText: nextButtonText,
            address: organization.paperApplication.address,
            link: (
              <a
                href={organization.paperApplication.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FormattedMessage
                  id="app.slides.welcome.paperApplication"
                  description="Phrase"
                  defaultMessage="paper application"
                />
              </a>
            ),
          }}
        />
      </p>
      <p>
        <FormattedMessage
          id="app.slides.welcome.onlineInstructions"
          description="Instructions on how many to complete per household."
          defaultMessage="{bolded}, even if you have multiple children."
          values={{
            bolded: (
              <strong>
                <FormattedMessage
                  id="app.slides.welcome.onlineInstructions.bolded"
                  description="Phrase"
                  defaultMessage="Only complete one application per household"
                />
              </strong>
            ),
          }}
        />
      </p>
    </Slide>
  );
};
