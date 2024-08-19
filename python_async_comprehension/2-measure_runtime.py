#!/usr/bin/env python3
"""Contains measure_runtime"""
import time
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Call async_comprehension coroutine
    four times (not executed yet),
    all coroutines are then executed at the same
    time using asyncio.gather().
    Because one coroutine takes about 10 seconds to complete
    and all coroutines are executed at the same time,
    the execution time of measure_runtime will also be 10 seconds."""
    startTime = time.time()
    tasks = [async_comprehension() for i in range(4)]

    numbers = await asyncio.gather(*tasks)

    endTime = time.time()
    return endTime - startTime
