import { FC } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Site } from 'src/types';
import { BasicTemplateStyles } from './BasicTemplateStyles';

interface Props {
  site: Site;
}

/**
 * BasicTemplate
 * * Renders basic template
 * * Passes template style information to BasicTemplateStyles
 */
export const BasicTemplate: FC<Props> = ({ site }) => {
  const location = useRouteMatch('/:organization/:route');
  let currentPageData;

  if (!location) {
    // default the current page to the home page
    currentPageData = site?.routes.find((r) => r.name === 'home');
  } else {
    currentPageData = site?.routes.find(
      (r) => r.name === (location?.params as any)?.route
    );
  }

  if (!currentPageData?.name) return <div>Sorry! This page was not found.</div>;
  return (
    <BasicTemplateStyles styles={site.styles}>
      <div className="hero--sub">
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">{(location?.params as any)?.route}</h1>
          </div>
        </div>
        <div className="hero-tint"></div>
      </div>
      <div className="content">
        <div className="container">
          <h2>{currentPageData?.layout?.data?.general?.title}</h2>
          <p>{currentPageData?.layout?.data?.general?.description}</p>
        </div>
      </div>
      {currentPageData?.layout?.data?.awards && (
        <div className="content--shaded">
          <div className="container">
            <h2>{currentPageData?.layout?.data?.awards.title}</h2>
            <ul className="image__list">
              {currentPageData?.layout?.data?.awards.list.map((award) => (
                <li>
                  <img src={award?.logo} />
                  <br />
                  {award?.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {currentPageData?.layout?.data?.community && (
        <div className="content">
          <div className="container">
            <h2>{currentPageData?.layout?.data?.community.title}</h2>
            <p>{currentPageData?.layout?.data?.community.description}</p>
            <p>
              <img src={currentPageData?.layout?.data?.community?.image} />
            </p>
            {currentPageData?.layout?.data?.community.details.map((detail) => (
              <div className="text__list">
                <p className="text__item">
                  <strong>{detail?.title}</strong>
                </p>
                <br />
                <p>{detail?.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </BasicTemplateStyles>
  );
};
