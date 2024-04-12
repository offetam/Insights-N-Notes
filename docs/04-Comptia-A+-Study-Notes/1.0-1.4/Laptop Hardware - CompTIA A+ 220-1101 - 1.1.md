---
title: Laptop Hardware - CompTIA A+ 220-1101 - 1.1
sidebar_label: Laptop Hardware - 1.1
---

:::note
As always you can find the course for all these topics for free on youtube. Thanks to Professor Messer for access to free resources! 👏👏👏👏
:::

# Laptop Hardware - CompTIA A+ 220-1101 - 1.1

## Laptop troubleshooting

Laptop troubleshooting will often vary based on the organization and the latptop that they use. It will tend to be a learning process as some manufacturers will be easier than others. 

Overtime, one will get more used to an organizations tools as they learn to leverage tools such as the manufacturers user manual or after they gain more hands-on experience. 

## Laptop batteries

Usually easily replaced and accessible. Some may have it inside the case which will not be modular.

Most common batteries are **lithium ion** (li-ion) or **lithium polymer** (LiPo)
Batteries are designed for being fully charged without worrying about a "memory effect". Over time, the battery will degrade after many charge cycles. You may find after several years a laptop's battery is inefficient and may need replacement 

:::tip
You'll find smartphones also tend to use lithium ion batteries, and after a couple years of charge cycles, may be around the time you upgrade your phone!
:::

These batteries have specific form factors so the make and model of the laptop is critical to ensuring that battery can replace your old one. A battery for one laptop may not necessarily be compatible with another.

## Keyboard
The most used component in laptop, often easy to replace, connected by screws and a ribbon cable (NEED IMAGE), but in some instances may not be as easy

Some may use external keyboard (not too portable but work when you absolutely need one in an emergency)

Smaller laptops have less room for the keyboard. Note that some may not have room for numpad (for example).

Some may have function keys have secondary functions (usually you use "fn" to enter the function key)

### Laptop Keys
Keycaps are fragile for the keyboard, check with manufacturer instructions
Since they are delicate, you don't want to damage the keycap or any component underneath it.

![29484e32f1d2602568954a326ef3ef21.png](/img/_resources/Comptia-Study-Notes/1.0-1.4/1.0/29484e32f1d2602568954a326ef3ef21.png)


## Laptop Memory
Programs are executing in the OS thru the memory. If upgrade are required we use the SO-DIMM (small-outline dual inline memory module)

Memory is usually easy to replace for mobile devices and thus can be accessed easily if need be for repair as well. However, some laptops may have their memory soldered which will require an entire board replacement instead, which is significantly costlier.

Below is a sample picture of an installation of a SO-DIMM
![dfc6dd704340a4669b6d02cfc201f75f.png](/img/_resources/Comptia-Study-Notes/1.0-1.4/1.0/dfc6dd704340a4669b6d02cfc201f75f.png)
<center>a 64mb SODIMM.</center>

## Laptop Storage 

Laptop storage will vary on a case-by-case basis. Older laptops may use Magnetic Disks which are physical and have spinning parts. In laptops they tend to be 2.5in (3.5in is common on desktops).

Newer laptops may have SSDs (solid-state drives) which are all memory, without moving parts. They are quiet, and have faster access time, and may be 2.5in. They tend to have increased read/write speeds compared to HDDs and may have a significant performance uplift.

There are also m.2 ssds which are a smaller factor intalled directly for the mobo to access (no cables/sata), these tend to be modular storage and easy to install.

### Replacing Laptop Storage
May be internal, and require entire laptop opened. Some may only have windows that are modular to allow for easier installation/replacement. m.2 drive's installation is similar to RAM installation.

![8945ad31c1c22391bc4a5c39e8dd828d.png](/img/_resources/Comptia-Study-Notes/1.0-1.4/1.0/8945ad31c1c22391bc4a5c39e8dd828d.png)
<center>Solid state drives</center>


![55b8ebc1578e4395c119e06e4d26fc05.png](/img/_resources/Comptia-Study-Notes/1.0-1.4/1.0/55b8ebc1578e4395c119e06e4d26fc05.png)
<center>magnetic drive top and bottom view below</center>

### Migration from HDD to SSD
Since SSDs are faster than HDDs, they can help improve older laptops using HDDs
(its like getting a new laptop)

One ocmmon method is installing OS onto an SSD which can be time-consuming to do without certain tools

For example, clone tools exist. You can image/clone the HDD and move that to the SSD instead.

Some manufacturers have their own program to do so, but there are software that exist open-source or 3rd party)

Some orgs may use one image file to create multiple copies
or a drive-to-drive image where you are simply copying and image directly from one drive to another
	This requires 2 systems running though or the system allows multiple drives

## 802.11 wireless & bluetooh

Newer laptops may be using 802.11 wireless & bluetooh that are built in to the system board or motherboard. Some laptops may have PCI to add in such access.

For example a LAN (local area network) for internet

Usually easy to replace

Some also have bluetooth, a PAN(personal area network) which is shorter range for connecting to nearby devices

Screenshot from the explanation from the video: 
![27f239447ef33c7bf3a5f82989396937.png](/img/_resources/Comptia-Study-Notes/1.0-1.4/1.0/27f239447ef33c7bf3a5f82989396937.png)
This particular laptop has Wireless local area network, Wireless Personal Area Network mini pci interfaces.

There is a third, WWAN which is wireless wide area network for a cellular network for 3rd party cellular network access. These also tend to be easy to install. 

## Biometrics

In newer laptops, you may also come across biometric data whereby users use fingerprint or face recognition to sign into their OS. These settings are found usually on the OS and for example use the laptop's camera to verifcy face recognition or a fingerprint reader to read the finger.

These are unique and relatively save sign-in options that may be combined still with a password to ensure higher security.

## Near-field communication (NFC)
Common in mobile device being integrated to laptops. Authentication without physical touch. For example, paying (apple wallet, samsung pay) using your phone or your watch. 

These are short distance communications and could be used to auth without a pw in say in a hospital or a warehouse and where access is only required occasionally, which is good for convenience. 