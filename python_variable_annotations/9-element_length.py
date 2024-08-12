#!/usr/bin/env python3
"""Contains element_length function"""
import typing


def element_length(lst: typing.Iterable[typing.Sequence]
                   ) -> typing.List[typing.Tuple[typing.Sequence, int]]:
    """Get the length of each sequence in an interable.
    Args:
        lst: an iterable (list or tuple for example)
    Return: a list of tuples of  two values each, the first is the
    sequence in lst, and its length.
    EX:
        element_length([[1, 2, 3], [4, 5, 6]])
        -> [([1, 2, 3], 3), ([4, 5, 6], 3)]
        """
    return [(i, len(i)) for i in lst]
