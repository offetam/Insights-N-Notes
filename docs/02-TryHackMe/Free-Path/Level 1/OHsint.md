---
id: OHsint
title: OHsint
---

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

## **Link to [Room](https://tryhackme.com/room/ohsint)**

From the photo downloaded, we can note that it's a jpg file. Perhaps the metadata has not been removed and indeed: 

![exiftool.png](/img/_resources/TryHackMe-FreePath/Level-1/exiftool.png)

From googling the author (OWoodflint), we can find this [user](https://twitter.com/OWoodflint): (which could potentially be removed due to [new twitter terms](https://help.twitter.com/en/rules-and-policies/inactive-twitter-accounts) with 30 day inactivity)

![twitter-user.png](/img/_resources/TryHackMe-FreePath/Level-1/twitter-user.png)<div style = {{ textAlign: 'center' }}> *The Twitter user found via google searching.* </div>


We are provided the BSSID address: B4:5D:50:AA:86:41. From here, I searched for potential tools to use, there's also a bas64 encoded hint suggesting we use [Wigle](https://www.wigle.net/). 

![OshintHint.png](/img/_resources/TryHackMe-FreePath/Level-1/OshintHint.png)<div> *A hint provided courtesy of PenTestical.* </div>


Once we register and zoom out, we can see where the BSSID/Mac address sends us to.

On advanced search, we get get more fine info. For example the SSID is: UnileverWiFi
![BSSID-lookup.png](/img/_resources/TryHackMe-FreePath/Level-1/BSSID-lookup.png)

:::note
Now, lets search elsewhere for their email. What do you know? We found an email on github:
:::

![github-details.png](/img/_resources/TryHackMe-FreePath/Level-1/github-details.png)

Then there's also a wordpress **[blog](https://oliverwoodflint.wordpress.com/)** which we can find other details like where he went on holiday. 

![osint-blog.png](/img/_resources/TryHackMe-FreePath/Level-1/osint-blog.png)<div style = {{ textAlign: 'center' }}> *The password seems to be posted on there as well (pennYDropper.).* </div>
 

**Room complete!** 🔥🔥🔥