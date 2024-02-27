import settingsSchema from './settings-schema';
import navigation from './navigation';
import navigationLink from './objects/navigationLink';
import navigationSection from './objects/navigationSection';
import blockContent from './blockContent';
import event from './event-schema';
import staff from './staff-schema';
import staffCategory from './staff-category-schema';
import resource from './resource-schema';
import resourceCategory from './resource-category-schema';
import newsletter from './newsletter-schema'
import formType from './formType';
import heroType from './heroType';
import imageGalleryType from './imageGalleryType';
import pageType from './pageType';
import promotionType from './promotionType';
import textWithIllustrationType from './textWithIllustration';
import videoType from './videoType';
import textBlockType from './textBlockType';

const schemaTypes = [
    settingsSchema,
    navigation,
    navigationLink,
    navigationSection,
    blockContent, 
    event, 
    staff, 
    staffCategory, 
    resource, 
    resourceCategory, 
    newsletter,
    formType,
    heroType,
    imageGalleryType,
    pageType,
    promotionType,
    textBlockType,
    textWithIllustrationType,
    videoType,
]

export default schemaTypes;