# chapter 8 scribbles

_list = ['ben', 'guy', 'guy', 'fred']   
counts = {}

for name in _list: 
    try:
        if name in counts or name:
            counts[name] += 1
        else:
            counts[name] += 0
    except:

print(counts)

#or use the get() function

_list = ['ben', 'guy', 'guy', 'fred', 'ben', 'guy']   
counts = {}

for name in _list:
    counts[name] = counts.get(name, 0) + 1

print(counts)


