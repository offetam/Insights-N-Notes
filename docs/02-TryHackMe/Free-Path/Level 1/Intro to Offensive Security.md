---
id: Intro-To-Offensive-Security
title: Intro To Offensive Security 
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

## **Link to [Room](https://tryhackme.com/room/introtooffensivesecurity)**

## Hacking your first machine 🌎
`gobuster -u [webpage] -w wordlist.txt dir`

Explanation: Gobuster is a brute force URI (Uniform resource identifier) tool to find hidden directories and files. 

`-u` argument for website to scan  
`-w` list of words to iterate (in order to locate potential hidden files)

THM provides an example with `gobuster -u http://fakebank.com -w wordlist.txt dir` where they scan the fakebank website using using wordlist.txt

![gobusterscan.png](/img/_resources/TryHackMe-FreePath/Level-1/gobusterscan.png)<div style = {{ textAlign: 'center' }}> *(we revealed 2 open directories from the scan)* </div>

**Here, Gobuster finds 2 directories of interest:**
(Status 200 indicates it found a working directory)
/images and /bank-transfer

From the /bank-transfer webpage:
![exposed-site.png](/img/_resources/TryHackMe-FreePath/Level-1/exposed-site.png)

![sending-money.png](/img/_resources/TryHackMe-FreePath/Level-1/sending-money.png)<div style = {{ textAlign: 'center' }}> *We transfer money from the maliciously acquired funds in the account* </div>



## Task 2: What is Offensive Security? 🌎
The process of breaking into computer systems, be it exploiting bugs/vulns or finding loopholes with the full intent of gaining unauthorized access.

Defensive security looks to protect an organization by securing a network, and analyzing and identifying digital threats.

> In a defensive cyber role, you could be investigating infected computers or devices to understand how it was hacked, tracking down cybercriminals, or monitoring infrastructure for malicious activity.
> -TryHackMe

## Task 3: Careers in Cybersecurity 🌎

The cyber careers room goes into more depth about the different careers in cyber. However, here is a short description of a few offensive security roles:

- Penetration Tester - Responsible for testing technology products for finding exploitable security vulnerabilities.
- Red Teamer - Plays the role of an adversary, attacking an organization and providing feedback from an enemy's perspective.
- Security Engineer - Design, monitor, and maintain security controls, networks, and systems to help prevent cyberattacks.

**Keep practicing!** 🔥🔥🔥

