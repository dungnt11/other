# Introduction
note: This tutorial is meant for users who are using the NVIDIA Proprietary (non-free) drivers.


You can check what drivers you have installed by entering the following command into your terminal:
```
inxi -G
```
# Install NVIDIA Drivers

If you want to know which drivers are avaliable for you, enter following command into your terminal:

mhwd -l

Truoc khi cai ```sudo mhwd -i pci video-modesetting```

If you have the Nouveau driver you can install the proprietary NVIDIA driver by using the Manjaro Hardware Detection (MHWD) utility. To do so, enter the following command into your terminal:
```
sudo mhwd -i pci video-nvidia-450xx
```

Once Complete, reboot your system to complete the process. You can then confirm that the driver has been installed and is working by entering the following command into your terminal:
```
mhwd -li
```
