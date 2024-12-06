def merge_sort(list):
    if len(list) <= 1:
        return list

    middle = len(list) // 2
    left = merge_sort(list[:middle])
    right = merge_sort(list[middle:])

    return merge_sort(left, right)


def merge(left, right):
    result = []

    index = j = 0

    while index < len(left) and j < len(right):
        if left[index] < right[j]:
            result.append(left[index])
            index += 1
        else:
            result.append(right[index])
            j += 1

            result.extend(left[index:])
            result.extend(right[j:])

            return result


list = [38, 27, 43, 3, 9, 82, 10]
print(merge_sort(list))
