const DEFAULT_TITLE =
  "STRADEXI — Intelligent Workflow Automation";

const DEFAULT_DESCRIPTION =
  "STRADEXI designs and deploys intelligent workflow systems that eliminate repetitive operational work across staffing, logistics, recruiting, and B2B operations.";

export function setSEO(
  title: string = DEFAULT_TITLE,
  description: string = DEFAULT_DESCRIPTION,
) {
  document.title = title;

  const descriptionTag =
    document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );

  if (descriptionTag) {
    descriptionTag.setAttribute("content", description);
  } else {
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = description;
    document.head.appendChild(meta);
  }

  const ogTitle =
    document.querySelector<HTMLMetaElement>(
      'meta[property="og:title"]',
    );

  if (ogTitle) {
    ogTitle.setAttribute("content", title);
  }

  const ogDescription =
    document.querySelector<HTMLMetaElement>(
      'meta[property="og:description"]',
    );

  if (ogDescription) {
    ogDescription.setAttribute("content", description);
  }
}