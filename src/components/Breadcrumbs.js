import styled from "styled-components/macro";

const CrumbStyles = styled.a`
  color: inherit;
  text-align: center;
  text-decoration: none;
  &:hover {
    text-decoration: revert;
  }

`;

const Crumb = ({ href, linkText, isCurrentPage }) => {
  return (
    <CrumbStyles href={href} aria-current={isCurrentPage ? "page" : undefined}>
      {linkText}
    </CrumbStyles>
  );
};

const BreadcrumbsStyles = styled.nav`
  max-width: 500px;
  margin: 8px auto;
  padding: 16px;
  border: 1px solid green;
  ol {
    list-style: none;
    margin: 8px auto;
    width: 100%;
    padding-inline-start: 0;
    text-align: center;
    li {
      display: inline;
      &:not(:first-of-type) {
        margin-left: 8px;

        &::before {
          display: inline-block;
          margin-right: 8px;
          border-right: 1px solid black;
          opacity: 0.35;
          /* without set height element does not display */
          height: 0.8em;
          transform: rotate(15deg);
          content: "";
        }
      }
      [aria-current= "page" ] {
        color: green;
        font-weight: bold;
      }
    }
  }
`;

function Breadcrumbs() {
  return (
    <BreadcrumbsStyles aria-label="Breadcrumb">
      <ol>
        <li>
          <Crumb href={"/"} linkText={"Home"} />
        </li>
        <li>
          <Crumb href={"/living"} linkText={"Living Room"} />
        </li>
        <li>
          <Crumb href="/living/couch" linkText={"Couches"} />
        </li>
        <li>
          {/* here for the ex sake with set manually the current page */}
          <Crumb
            href="/living/couch/sectional"
            linkText={"Sectionals"}
            isCurrentPage={true}
          />
        </li>
      </ol>
    </BreadcrumbsStyles>
  );
}

export default Breadcrumbs;
