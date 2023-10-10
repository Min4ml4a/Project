'use client';

import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMgs = () => {
    return (
      <FacebookProvider appId="273802055622939" chatSupport>
        <CustomChat pageId="148247165034102" minimized={true}/>
      </FacebookProvider>    
    );
  }

export default FacebookMgs;