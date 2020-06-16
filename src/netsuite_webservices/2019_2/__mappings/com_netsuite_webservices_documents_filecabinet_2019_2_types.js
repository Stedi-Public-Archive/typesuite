var com_netsuite_webservices_documents_filecabinet_2019_2_types_Module_Factory = function () {
  var com_netsuite_webservices_documents_filecabinet_2019_2_types = {
    name: 'com_netsuite_webservices_documents_filecabinet_2019_2_types',
    typeInfos: [{
        type: 'enumInfo',
        localName: 'TextFileEncoding',
        values: ['_big5', '_gb2312', '_gb18030', '_iso88591', '_macRoman', '_shiftJis', '_utf8', '_windows1252']
      }, {
        type: 'enumInfo',
        localName: 'MediaType',
        values: ['_APPCACHE', '_AUTOCAD', '_BMPIMAGE', '_CERTIFICATE', '_CFF', '_CONFIG', '_CSV', '_EOT', '_EXCEL', '_FLASH', '_FREEMARKER', '_GIFIMAGE', '_GZIP', '_HTMLDOC', '_ICON', '_IMAGE', '_JAVASCRIPT', '_JPGIMAGE', '_JSON', '_LZH', '_MESSAGERFC', '_MISCBINARY', '_MISCTEXT', '_MP3', '_MPEGMOVIE', '_MSPROJECT', '_OTF', '_PDF', '_PJPGIMAGE', '_PLAINTEXT', '_PNGIMAGE', '_POSTSCRIPT', '_POWERPOINT', '_QUICKTIME', '_RTF', '_SCSS', '_SMS', '_STYLESHEET', '_SVG', '_TAR', '_TARCOMP', '_TIFFIMAGE', '_TTF', '_VISIO', '_WEBAPPPAGE', '_WEBAPPSCRIPT', '_WOFF', '_WOFF2', '_WORD', '_XMLDOC', '_XSD', '_ZIP']
      }, {
        type: 'enumInfo',
        localName: 'FolderFolderType',
        values: ['_appPackages', '_attachmentsReceived', '_attachmentsSent', '_certificates', '_documentsAndFiles', '_emailTemplates', '_faxTemplates', '_images', '_letterTemplates', '_mailMerge', '_marketingTemplates', '_pdfTemplates', '_suitebundles', '_suitecommerceAdvancedSiteTemplates', '_suitescripts', '_templates', '_webSiteHostingFiles']
      }, {
        type: 'enumInfo',
        localName: 'FileAttachFrom',
        values: ['_computer', '_web']
      }, {
        type: 'enumInfo',
        localName: 'FileEncoding',
        values: ['_autoDetect', '_shiftJis', '_utf8', '_windows1252']
      }],
    elementInfos: []
  };
  return {
    com_netsuite_webservices_documents_filecabinet_2019_2_types: com_netsuite_webservices_documents_filecabinet_2019_2_types
  };
};
if (typeof define === 'function' && define.amd) {
  define([], com_netsuite_webservices_documents_filecabinet_2019_2_types_Module_Factory);
}
else {
  var com_netsuite_webservices_documents_filecabinet_2019_2_types_Module = com_netsuite_webservices_documents_filecabinet_2019_2_types_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.com_netsuite_webservices_documents_filecabinet_2019_2_types = com_netsuite_webservices_documents_filecabinet_2019_2_types_Module.com_netsuite_webservices_documents_filecabinet_2019_2_types;
  }
  else {
    var com_netsuite_webservices_documents_filecabinet_2019_2_types = com_netsuite_webservices_documents_filecabinet_2019_2_types_Module.com_netsuite_webservices_documents_filecabinet_2019_2_types;
  }
}