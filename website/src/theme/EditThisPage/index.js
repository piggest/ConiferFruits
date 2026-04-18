import React from 'react';
import Translate from '@docusaurus/Translate';
import IconEdit from '@theme/Icon/Edit';

export default function EditThisPage({ editUrl }) {
  const prefix = 'https://github.com/piggest/ConiferFruits/edit/main/docs/';
  const docPath = editUrl.startsWith(prefix) ? editUrl.slice(prefix.length) : '';
  const appUrl = docPath
    ? `cnfr://edit?path=${encodeURIComponent('docs/' + docPath)}`
    : null;

  return (
    <>
      {appUrl && (
        <a href={appUrl} className="theme-edit-this-page" style={{ marginRight: 12 }}>
          <IconEdit />
          <Translate
            id="theme.common.editThisPage.app"
            description="App edit link">
            編集
          </Translate>
        </a>
      )}
      <a href={editUrl} target="_blank" rel="noreferrer noopener" className="theme-edit-this-page">
        <IconEdit />
        {/* Docusaurus 既定のID (theme.common.editThisPage) は「このページを編集」という翻訳が効いてしまうため独自IDを使う */}
        <Translate
          id="theme.common.editThisPage.github"
          description="GitHub edit link">
          GitHubで編集
        </Translate>
      </a>
    </>
  );
}
