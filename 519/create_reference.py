
import sys
import os
import time 



NP = 00

# Number of the last file to renderize
NR = 100
#A program variable
temp  = NP



while temp !=  (NR +1):
   esegui =  'cp st.jpg ./amtt/amtt%04d.jpg' % temp 
   print esegui
   os.system(esegui)
   print esegui 

   temp = temp +1