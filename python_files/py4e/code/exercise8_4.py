# chapter 8 exercise 8.4

fname = input("Enter File Name: ")
fhandle = open(fname)
word_list = list()

for line in fhandle:
    words = line.split()
    for word in words:
        if word not in word_list:
            word_list.append(word)
    word_list.sort()
print(word_list)
