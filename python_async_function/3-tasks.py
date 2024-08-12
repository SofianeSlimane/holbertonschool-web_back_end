#!/usr/bin/env python3
"""This module contains the task_wait_random function"""
import asyncio
from typing import Any
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.tasks.Task[Any]:
    """Returns a task object that executes
    the wait_random coroutine"""
    return asyncio.Task(wait_random(max_delay))
