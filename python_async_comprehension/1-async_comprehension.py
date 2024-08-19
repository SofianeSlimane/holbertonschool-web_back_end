#!/usr/bin/env python3
"""Contains coroutine async_comprehension"""

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> list:
    """Retrieves numbers from an asynchronous generator and
    return them"""
    numbers = [number async for number in async_generator()]
    return numbers
