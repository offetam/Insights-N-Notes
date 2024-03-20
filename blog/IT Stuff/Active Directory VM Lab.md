---
slug: AD 
title: Active Directory Lab
authors: [ET]
tags: [lab]
---

In this lab I set up a Windows Server 2022 Machine, and utilized several Windows 10 VMs. The goal of this lab is to learn more about the tools Windows Server provides and to mimic that of a real network. 

For the setup, I used VirtualBox as this was the most convenient!

:::note
Microsoft has their own [**Free Module**](https://learn.microsoft.com/en-gb/training/modules/introduction-to-ad-ds/1-introduction) on the fundamentals to AD DS 
:::

Firstly, I downloaded the windows server 2022 .iso [files](https://www.microsoft.com/en-us/evalcenter/download-windows-server-2022) and the windows 10 .iso [files](https://www.microsoft.com/en-us/evalcenter/download-windows-10-enterprise) via Microsoft. 

(Always make sure to verify the .iso files when possible using tools like certutil to match the Hash!)
![3df411e48306dcafd1885d6ed480d817.png](../_resources/3df411e48306dcafd1885d6ed480d817.png)
![d91fa9f9111aeaa47976eacdf2b52313.png](../_resources/d91fa9f9111aeaa47976eacdf2b52313.png)
<center>*Matching hashes from adguard.net*</center>


After downloading the ISOs, I set up the virtual machines (both setup processes are very similar)

Simply give it a name and attach the respective .iso for the machine you are creating. 
![0bd924ad0672269dc603244762d0d04e.png](../_resources/0bd924ad0672269dc603244762d0d04e.png)
<center>*Setup for a Windows 10 Machine* (If the setup looks slightly different it may be because you are in Guided Mode)</center>

Then I proceeded to launch the VMs, and finish the Windows setup as described in the writeup.

:::note
Note that you CAN launch multiple VMs at a time, but depending on the host computer may run slower!

I also found that sometimes my vm instances would abort when running multiple VMs.
:::

Next, I configured the network on VirtualBox, in order to create a simulated network between the AD VM with the other Win 10 VMs.
![f7a4b7b0c843619cadbebd1cc0b338a3.png](../_resources/f7a4b7b0c843619cadbebd1cc0b338a3.png)

![0bf7ddcfe069f9407091e55faa6f33ad.png](../_resources/0bf7ddcfe069f9407091e55faa6f33ad.png)
Next, when we launch our Win 10 machines again and proceed with setup, we can "Domain Join Instead" and proceed with setup as normally.

![a41996da3fd38be5045fbbc8e2713d8b.png](../_resources/a41996da3fd38be5045fbbc8e2713d8b.png)

I then configured the network for the Win 10 VM with the Server, by getting the IP address of my Server:

![6057bb65a07af99f8a791ad9cb67b251.png](../_resources/6057bb65a07af99f8a791ad9cb67b251.png)

![89876d537663a11328319b66b40d17fd.png](../_resources/89876d537663a11328319b66b40d17fd.png)

![ab403765efb3aa074076bddbb843d28f.png](../_resources/ab403765efb3aa074076bddbb843d28f.png)
Here, we can choose the features to add within the server.

![dc144395abb2d9c2b6fa6b7929a109b4.png](../_resources/dc144395abb2d9c2b6fa6b7929a109b4.png)
I let the process complete so that Acive Directory would be installed. (The server will restart)

In the below screenshots, I then created a user:
![cfa6fa3d0fad6a8d214e5a0ded8f7470.png](../_resources/cfa6fa3d0fad6a8d214e5a0ded8f7470.png)

![3fe0b66b2341e96f0efdcb84cd9f5d96.png](../_resources/3fe0b66b2341e96f0efdcb84cd9f5d96.png)

In this environment, I set the password to never expire, though you can opt for different settings.

When it comes to password expiries, NIST notes:
>Users tend to choose weaker memorized secrets when they know that they will have to change them in the near future. When those changes do occur, they often select a secret that is similar to their old memorized secret by applying a set of common transformations such as increasing a number in the password. 
>[Source](https://pages.nist.gov/800-63-FAQ/#q-b05) (q-b05)

As a result, enforcing password expiries may actually bring more harm than improve security. Such tools like MFA can bring more benefits than using password expiries.


Logging into our Win 10 VM again, we will connect to the Domain
![4c66fe1de24d10792e1e3abea22960a3.png](../_resources/4c66fe1de24d10792e1e3abea22960a3.png)
<center>*Make sure that the Server VM is running, otherwise the domain won't be recognized.* Also note that the login (username) will be based on the user logon name you provided!</center>



![6b0e9d45aa5af848636dff35f5326584.png](../_resources/6b0e9d45aa5af848636dff35f5326584.png)
Now, the VM will restart and you can sign on! (on the other user)

At this point, I will play around with the settings to understand some of the tools provided by Windows Server. 

:::tip
Big thanks to Joshua Green for his tutorial on setting up a [home lab]!(https://drive.google.com/file/d/1YgtiSxaitgIpNsu5HuIYzOV49pnv4iw8/view?pli=1)

*This post is mostly to show what I learned and noted!*
:::