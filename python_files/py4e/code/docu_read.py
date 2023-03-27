# doc reader

def docu_reader(file_path, starts_with):
    """Print all lines within specified document that start with specified input.

    :param file_pathl: str - path of file to be read. i.e ~/directory/filename
    :param starts_with: str - What to look for at start of line, determines if printed. i.e From:
    :return: str - verification that all criteria matching lines have been printed.
    """
    print(docu_reader.__doc__)
    f_handle = open(file_path)
    name_list = []
    line_count = 0
    for line in f_handle:
        line_count += 1
        if not line.startswith(starts_with):
            continue
        line = line.rstrip()
        name_list.append(line)
    print('\n'.join(set(name_list)))
    return str(line_count) + " line were searched, " + str(len(set(name_list))) + " unique email adresses were found"

# test
file_path ='C:\\Users\\nick.latcham\\repos\\python_files\\help_files\\mbox.txt'
starts_with = 'From:'

#file_path = input("Input file path i.e. ~/directory/file.txt: ")
#starts_with = input("Input first desired word in line: ")

print(docu_reader(file_path, starts_with))


