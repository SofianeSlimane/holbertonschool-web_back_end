#!/usr/bin/env python3
"""Contains sto_kv function"""
import typing


def to_kv(k: str, v: typing.Union[int, float]) -> typing.Tuple[str, float]:
    """Returns sum of every value in a list with both integers and floats"""
    return (k, v * v)
