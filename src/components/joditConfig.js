// joditConfig.js
import Jodit from 'jodit';

export const initializeJodit = (elementId) => {
  return new Jodit(elementId, {
    defaultMode: Jodit.MODE_WYSIWYG,
    // Add other Jodit configuration options here
  });
};
