# chapter 6

#email address parser to get domain from email

data = "From nick.latcham@rihmfamilycompanies.com Wed Jan 18 14:04:28 2023"
at_pos = data.find("@")         #.find(start, stop, end) 
spc_pos = data.find(" ", at_pos)
host = data[at_pos + 1 : spc_pos] 

data = 'From stephen.marquard@uct.ac.za Sat Jan  5 09:14:16 2008'
pos = data.find('.')
print(data[pos:pos+3])

print(host)
print("test")

