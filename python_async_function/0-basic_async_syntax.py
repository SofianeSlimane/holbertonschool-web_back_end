#!/usr/bin/env python3
"""Contains asynchronous coroutine wait_random"""
import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """Generate a random delay, then pause the
    program for as long as the delay generated,
    then returns it"""
    delay = random.uniform(0, max_delay + 1)
    await asyncio.sleep(delay)
    return delay
