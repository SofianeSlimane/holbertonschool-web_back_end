#!/usr/bin/env python3
"""Contais async_generator"""
import random
import asyncio
from typing import Generator


async def async_generator() -> Generator[int, None, None]:
    """Returns an asynchronous generator.
    Yields values one after the other with yield, waiting
    one second before each yield"""
    for i in range(0, 10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
