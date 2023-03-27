# chapter 8, video part 3 exercise

# counting pattern

def common_word():
    fname = input('File: ')
    fhandle = open(line)
    count = dict()
    for line in fhandle:
        word = line.split()
        count[word] = count.get(word, 0) + 1
    return count   
