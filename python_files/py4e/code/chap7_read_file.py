# Chapter 7 Reading files

# Reading a file

fhand = open('../notes/file.txt')         #open the file as 'read-only'
count = 0
for line in fhand:      #use a for loop to read each line
    count += 1          # adds 1 to count every interation 
print(count)            #prints count which equals number of lines in the file being read

# read the whole file and output character count
fhand = open('../notes/file.txt')         #open the file as 'read-only'
inp = len(fhand.read())
print(inp)

# searching throug a file

fhand = open('../notes/file.txt')         #open the file as 'read-only'
for line in fhand:
    line = line.rstrip()                  # strips \n from end of line
    if line.startswith('to'):
        print(line)

# search throuogh file, list lines with param, return listed lines

fhand = open('../notes/file.txt')
line_list = []
line_num = -1
for line in fhand:
    line = line.rstrip()
    line_num += 1
    if line.startswith('to'):
        line_list.append(line_num)
print(line_list)

