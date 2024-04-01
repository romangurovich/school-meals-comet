import { organization } from '@src/data/organization.ts';
import React from 'react';
import { FormattedMessage } from 'react-intl';

export const Footer = (): React.ReactElement => {
  return (
    <footer className="usa-footer page-footer">
      <div className="grid-container">
        <div className="usa-grid">
          <div className="not-real-disclaimer">
            <strong>
              <FormattedMessage
                id="footer.notRealDisclaimer"
                description="Disclaimer that this it not a real application."
                defaultMessage="This is not a real application for school meal benefits"
              />
            </strong>
          </div>
          <img
            className="logo"
            src={organization.logoUrl}
            alt="Applewood Logo"
          />
          <div>{organization.name}</div>
          <div>
            {organization.contact.phone} / {organization.contact.email}
          </div>
          <div>{organization.contact.address}</div>
        </div>
      </div>
    </footer>
  );
};
