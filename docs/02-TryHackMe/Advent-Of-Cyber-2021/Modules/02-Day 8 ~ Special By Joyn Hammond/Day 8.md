---
id: Advent of Cyber Day 8
title: Day 8
sidebar_label: Day 8 ~ Special by John Hammond
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

## [Day 8] <Highlight color="#32a893">Special</Highlight> by John Hammond Santa's Bag of Toys

>McSkidy was notified of some terrible news! Santa's laptop, which he uses to prepare his bag of toys for Christmas, is missing! We believe a minion at the Grinch Enterprise stole it, but we need to find out for sure. It is up to us to determine what actor compromised the laptop and recover Santa's bag of toys!
>
>Unfortunately, The Best Festival Company had minimal monitoring tools on Santa's laptop (he is the boss, after all)! All we have to work with are some PowerShell Transcription Logs we were able to remotely recover just after it went missing. You can find the transcription logs within the SantasLaptopLogs folder on the Desktop of the attached Windows virtual machine.

While you do not have to use these commands for this task, these will turn on PowerShell Transcription Logging for a local host if entered in an Administrator command prompt:
```
reg add HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows\PowerShell\Transcription /v EnableTranscripting /t REG_DWORD /d 0x1 /f
reg add HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows\PowerShell\Transcription /v OutputDirectory /t REG_SZ /d C:/ /f
reg add HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows\PowerShell\Transcription /v EnableInvocationHeader /t REG
```

Useful registry to add for powershell transcription logging for a localhost. 

Looking at logs - 
![logs.png](/img/_resources/Day_8/logs.png)

![github.png](/img/_resources/Day_8/github.png)
:::tip
Note how on github, the pw is visible for all users to see and observe. This is the case for many (public) repos that do not omit keys or secrets like the Grinch did here
:::

![UHARC.png](/img/_resources/Day_8/UHARC.png)
Here we extract an existing archive to view contents of the archive.